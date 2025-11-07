"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function KidsPage() {
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
    <div className="relative pt-[100px] pb-[100px] min-h-screen">
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <Image
          alt="дети"
          src="/images/detifon5.jpg"
          className="w-full h-full object-cover blur-md brightness-90"
          fill
        />
      </div>

      {/* Контент */}
      <div className="relative max-w-[1200px] mx-auto px-6 space-y-10">
        {data.map((e) => (
          <div
            key={e.id}
            className="flex flex-col md:flex-row items-center md:items-start bg-white bg-opacity-80 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm transition-transform hover:scale-[1.02]"
          >
            <img
              className="w-full md:w-[400px] h-[300px] object-cover"
              src={e.img}
              alt={e.name}
            />

            <div className="flex flex-col justify-between w-full md:w-[800px] p-6 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">{e.name}</h1>

              <div className="flex justify-center md:justify-start">
                <Button
                  id="basic-button"
               
                  color="primary"
                 sx={{border:'1px solid gray', color:"gray"}}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  время работы
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
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Пн 08:00 - 17:00</MenuItem>
        <MenuItem onClick={handleClose}>Вт 08:00 - 17:00</MenuItem>
        <MenuItem onClick={handleClose}>Ср 08:00 - 17:00</MenuItem>
        <MenuItem onClick={handleClose}>Чт 08:00 - 17:00</MenuItem>
        <MenuItem onClick={handleClose}>Пт 08:00 - 17:00</MenuItem>
        <MenuItem onClick={handleClose}>Сб 08:00 - 13:00</MenuItem>
        <MenuItem sx={{ color: "red" }} onClick={handleClose}>
          Вс Закрыто
        </MenuItem>
      </Menu>
    </div>
  );
}
