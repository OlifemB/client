import {useState} from "react";


export function useSort(items, sortProp) {
    const [sortMode, setSortMode] = useState(null);
    
    const sortedItems = !sortMode
        ? items
        : items.slice().sort((a, b) => {
            if (sortMode === "asc" && a[sortProp] > b[sortProp]) {
                return 1;
            } else if (sortMode === "asc") {
                return -1;
            } else if (sortMode === "desc" && a[sortProp] > b[sortProp]) {
                return -1;
            } else {
                return 1;
            }
        });
    
    return {
        sortMode,
        setSortMode,
        sortedItems
    };
}