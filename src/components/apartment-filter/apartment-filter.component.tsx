"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

import styles from "./apartment-filter.module.css";

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rooms = searchParams.get("rooms") ?? "";
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <Card className={styles.filters}>
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

      <div className={styles.group}>
        <span className={styles.label}>Цена, сом/мес</span>

        <div className={styles.price}>
          <Input
            className={styles.input}
            placeholder="от"
            defaultValue={minPrice}
            onBlur={(event) => updateParam("minPrice", event.target.value)}
          />

          <span className={styles.separator}>—</span>

          <Input
            className={styles.input}
            placeholder="до"
            defaultValue={maxPrice}
            onBlur={(event) => updateParam("maxPrice", event.target.value)}
          />
        </div>
      </div>
    </Card>
  );
}
