"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { ApartmentFilters } from "./apartment-filter.component";
import styles from "./apartment-filter.module.css";

export function MobileFiltersSheet({
  maxPrice,
  minPrice,
  rooms,
}: {
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 600px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="filter-show">
          <SlidersHorizontal className={styles.icon} />
        </div>
      </SheetTrigger>

      <SheetContent side="bottom" className={styles.sheetContent}>
        <SheetHeader className={styles.filterHeader}>
          <SheetTitle className={styles.filterText}>Фильтры</SheetTitle>
        </SheetHeader>

        <ApartmentFilters
          maxPrice={maxPrice}
          minPrice={minPrice}
          rooms={rooms}
        />
      </SheetContent>
    </Sheet>
  );
}
