import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isStarredSelectedState } from '@/recoil/starred-selected';

/**
 * Hook to manage the state of the "starred" menu item selection.
 */
export function useMenuOptionStarred() {
  const [isStarredSelected, setIsStarredSelected] = useRecoilState(
    isStarredSelectedState,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedIsStarredSelected = localStorage.getItem('isStarredSelected');
    if (savedIsStarredSelected) {
      setIsStarredSelected(JSON.parse(savedIsStarredSelected));
    }
    setLoading(false);
  }, [setIsStarredSelected]);

  const setStarredSelection = useCallback(
    (isSelected: boolean) => {
      setIsStarredSelected(isSelected);
      localStorage.setItem('isStarredSelected', JSON.stringify(isSelected));
    },
    [setIsStarredSelected],
  );

  return { isStarredSelected, loading, setStarredSelection };
}
