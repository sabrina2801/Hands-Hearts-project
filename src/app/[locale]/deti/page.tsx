"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslations } from "next-intl";

export default function KidsPage() {
      const t = useTranslations("HomePage");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  interface User {
    id: number;
    name: string;
    img: string;
    adres?: string;
  }

  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("/db.json");
        setData(res.data.deti);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="relative pt-[120px] pb-[120px] min-h-screen overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <Image
          alt="дети"
          src="/images/detifon5.jpg"
          className="w-full h-full object-cover blur-xs brightness-85"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {t('a29')}
        </h1>
        <p className="text-gray-200 mt-4 max-w-[700px] mx-auto text-lg">
           {t('a30')}
        </p>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10">
        {data.map((e) => (
          <div
            key={e.id}
            className="flex flex-col bg-white/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md hover:shadow-3xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px]">
              <Image
                src={e.img}
                alt={e.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <h1 className="text-2xl font-bold text-gray-800 h-[95px] mb-2">
                {e.name}
              </h1>
              <p className="text-gray-600 mb-4">{e.adres || "Адрес не указан"}</p>

              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <Button
                  id="basic-button"
                  color="primary"
                  sx={{
                    border: "1px solid gray",
                    color: "gray",
                    textTransform: "none",
                  }}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Время работы
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    background: "linear-gradient(90deg, #FB9F5B, #2D8CBF)",
                    textTransform: "none",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Меню */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: { "aria-labelledby": "basic-button" },
        }}
      >
        <MenuItem onClick={handleClose}>Пн–Пт 08:00–17:00</MenuItem>
        <MenuItem onClick={handleClose}>Сб 08:00–13:00</MenuItem>
        <MenuItem sx={{ color: "red" }} onClick={handleClose}>
          Вс — выходной
        </MenuItem>
      </Menu>
    </div>
  );
}
