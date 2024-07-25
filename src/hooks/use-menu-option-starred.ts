import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isStarredSelectedState } from '@/recoil/starred-selected'; // Adjust the path as necessary

/**
 * Hook to manage the state of the "starred" menu item selection.
 */
export function useMenuOptionStarred() {
  const [isStarredSelected, setIsStarredSelected] = useRecoilState(
    isStarredSelectedState,
  );

  useEffect(() => {
    const savedIsStarredSelected = localStorage.getItem('isStarredSelected');
    if (savedIsStarredSelected) {
      setIsStarredSelected(JSON.parse(savedIsStarredSelected));
    }
  }, [setIsStarredSelected]);

  const setStarredSelection = useCallback(
    (isSelected: boolean) => {
      setIsStarredSelected(isSelected);
      localStorage.setItem('isStarredSelected', JSON.stringify(isSelected));
    },
    [setIsStarredSelected],
  );

  return { isStarredSelected, setStarredSelection };
}
