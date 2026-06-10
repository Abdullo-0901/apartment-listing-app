"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { cn } from "@/src/lib";
import styles from "./apartment-filter.module.css";
import { useState } from "react";
import { useDebounce } from "@/src/hook";

export function Filters({
  maxPrice,
  minPrice,
  rooms,
}: {
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  //---------------------------------------------------------------------
  // Variables
  //---------------------------------------------------------------------

  const router = useRouter();
  const searchParams = useSearchParams();
  const [minPriceValue, setMinPriceValue] = useState(minPrice ?? "");
  const [maxPriceValue, setMaxPriceValue] = useState(maxPrice ?? "");

  //---------------------------------------------------------------------
  // Debounces
  //---------------------------------------------------------------------

  const updateMinPrice = useDebounce((value: string) => {
    updateParam("minPrice", value);
  }, 500);

  const updateMaxPrice = useDebounce((value: string) => {
    updateParam("maxPrice", value);
  }, 500);

  //---------------------------------------------------------------------
  // Functions
  //---------------------------------------------------------------------

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  }

  //---------------------------------------------------------------------
  return (
    <Card className={cn(styles.filters)}>
      {/* --------------------------------------------------------------------------- */}
      {/* ROOMS BUTTON */}
      {/* --------------------------------------------------------------------------- */}

      <div className={styles.group}>
        <span className={styles.label}>Комнат</span>

        <div className={styles.rooms}>
          {[1, 2, 3, 4].map((room) => (
            <Button
              key={room}
              variant={rooms === String(room) ? "default" : "outline"}
              className={styles.roomButton}
              onClick={() => updateParam("rooms", String(room))}
            >
              {room}
              {room === 4 ? "+" : ""}
            </Button>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* SEARCH INPUTS */}
      {/* --------------------------------------------------------------------------- */}

      <div className={styles.group}>
        <span className={styles.label}>Цена, сом/мес</span>

        <div className={styles.price}>
          <Input
            className={styles.input}
            placeholder="от"
            value={minPriceValue}
            onChange={(event) => {
              const value = event.target.value;

              setMinPriceValue(value);
              updateMinPrice(value);
            }}
          />
          <span className={styles.separator}>—</span>

          <Input
            className={styles.input}
            placeholder="до"
            value={maxPriceValue}
            onChange={(event) => {
              const value = event.target.value;

              setMaxPriceValue(value);
              updateMaxPrice(value);
            }}
          />
        </div>
      </div>
    </Card>
  );
}
