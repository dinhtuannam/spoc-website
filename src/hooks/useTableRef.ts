import { useCallback, useMemo, useRef } from 'react';

function useTableRef() {
    const tableRef = useRef<{ onFetch: () => void }>(null);

    const onFetch = useCallback(() => {
        if (tableRef.current) {
            tableRef.current.onFetch();
        }
    }, []);

    return useMemo(() => ({ tableRef, onFetch }), [onFetch]);
}

export default useTableRef;
