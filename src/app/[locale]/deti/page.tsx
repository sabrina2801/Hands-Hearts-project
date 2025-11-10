"use client"

import type React from "react"

import axios from "axios"
import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"
import { useTranslations } from "next-intl"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Dialog from "@mui/material/Dialog"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

interface User {
  id: number
  name: string
  img: string
  adres?: string
  avatar?: string
  nikname?: string
  coment?: string
  category?: string
  program?: string
}

export default function KidsPage() {
  const t = useTranslations("HomePage")

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // --- Sidebar фильтры и поиск
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({})

  const handleFilterChange = (key: string) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // --- Menu "Время работы"
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)
  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)

  // --- Dialog комментариев
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [data, setData] = useState<User[]>([])

  const handleOpenDialog = (id: number) => {
    setSelectedId(id)
    setDialogOpen(true)
  }
  const handleCloseDialog = () => {
    setDialogOpen(false)
    setSelectedId(null)
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("/db.json")
        setData(res.data.deti)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  const programs = [t("a51"), t("a52"), t("a53")]

  const filteredData = data.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase())

    const categories = ["Автовакзал", "1 - Советский", "101 мкр"]
    const anyCategorySelected = categories.some((category) => filters[category])
    const matchCategory = !anyCategorySelected ? true : filters[item.category || ""]

    const anyProgramSelected = programs.some((program) => filters[program])
    const matchProgram = !anyProgramSelected ? true : filters[item.program || ""]

    return matchSearch && matchCategory && matchProgram
  })

  const selectedUser = data.find((e) => e.id === selectedId)

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="hidden md:block md:w-[25%]">
        <Sidebar onSearch={setSearch} filters={filters} onFilterChange={handleFilterChange} />
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div
        className={`fixed md:hidden left-0 top-0 h-screen w-[80%] bg-white z-50 transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">
          <button onClick={() => setMobileMenuOpen(false)} className="mb-4">
            <CloseIcon />
          </button>
          <Sidebar onSearch={setSearch} filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </div>

      <div className="w-full md:w-[75%] ">
        <div className="pt-[60px] md:pt-[100px] pb-[120px] min-h-screen overflow-hidden px-4 md:px-0">
          <div className="flex md:hidden justify-between items-center mb-6 md:mb-0">
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2">
              <MenuIcon />
            </button>
            <h1 className="text-xl font-bold flex-1 text-center">{t("a29")}</h1>
            <div className="w-10" />
          </div>

          <div className="text-center hidden md:block">
            <h1 className="text-2xl font-bold">{t("a29")}</h1>
            <p className="mt-[20px] text-gray-500">{t("a30")}</p>
          </div>

          <div className="mt-[40px] md:mt-[60px] ml-0 md:ml-[100px] space-y-[40px] px-2 md:px-0">
            {filteredData.map((e) => (
              <div
                key={e.id}
                className="w-full md:w-[950px] flex flex-col md:flex-row rounded-2xl shadow-lg bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="w-full md:w-[300px] h-[200px] md:h-[210px]">
                  <img
                    className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                    src={e.img || "/placeholder.svg"}
                    alt={e.name}
                  />
                </div>
                <div className="flex flex-col justify-between p-[16px] md:p-[24px] w-full">
                  <div>
                    <h1 className="text-[18px] md:text-[20px] font-semibold text-neutral-800 leading-tight">
                      {e.name}
                    </h1>
                    <h2 className="mt-[8px] text-neutral-600 text-[14px] md:text-[15px]">{e.adres}</h2>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-[20px] gap-4 md:gap-0">
                    <Button
                      id="basic-button"
                      color="primary"
                      sx={{
                        border: "1px solid #ccc",
                        color: "#555",
                        textTransform: "none",
                        width: "100%",
                        "@media (min-width: 768px)": {
                          width: "180px",
                        },
                        borderRadius: "10px",
                        fontWeight: 500,
                        backgroundColor: "#fafafa",
                        boxShadow: "none",
                        transition: "all 0.3s ease",
                        "&:hover": { backgroundColor: "#f0f0f0", borderColor: "#999" },
                      }}
                      aria-controls={menuOpen ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={menuOpen ? "true" : undefined}
                      onClick={handleClickMenu}
                    >
                      Время работы
                    </Button>

                    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                      <button
                        onClick={() => handleOpenDialog(e.id)}
                        className="text-neutral-500 hover:text-neutral-700 transition-colors text-[14px] md:text-[15px] whitespace-nowrap"
                      >
                        {t("a54")}
                      </button>
                      <BookmarkBorderOutlinedIcon
                        sx={{ color: "gray", cursor: "pointer", fontSize: "20px", "&:hover": { color: "#1976d2" } }}
                      />
                      <LocalPhoneOutlinedIcon
                        sx={{ color: "gray", cursor: "pointer", fontSize: "20px", "&:hover": { color: "#1976d2" } }}
                      />
                      <span className="text-neutral-600 font-medium text-[14px] md:text-[15px]">+992 000 00 00</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleCloseMenu}
            slotProps={{ list: { "aria-labelledby": "basic-button" } }}
          >
            <MenuItem onClick={handleCloseMenu}>Пн–Пт 08:00–17:00</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Сб 08:00–13:00</MenuItem>
            <MenuItem sx={{ color: "red" }} onClick={handleCloseMenu}>
              Вс — выходной
            </MenuItem>
          </Menu>

          <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            aria-labelledby="comment-dialog-title"
            aria-describedby="comment-dialog-description"
            maxWidth="md"
            fullWidth
          >
            {selectedUser && (
              <div className="flex flex-col md:flex-row">
                <img
                  className="w-full md:w-[500px] h-[300px] md:h-[400px] object-cover"
                  src={selectedUser.img || "/placeholder.svg"}
                  alt={selectedUser.name}
                />
                <div className="w-full md:w-auto">
                  <h2 className="text-[16px] text-center pt-[10px] font-semibold mb-4">{selectedUser.name}</h2>
                  <div className="w-full md:w-[400px] h-[1px] bg-gray-300"></div>
                  <div className="flex items-center gap-[20px] ml-[20px] md:ml-[30px] mt-[20px] flex-wrap">
                    <img
                      className="w-[40px] h-[40px] rounded-[50%]"
                      src={selectedUser.avatar || "/placeholder.svg"}
                      alt=""
                    />
                    <h1 className="text-sm md:text-base">{selectedUser.nikname} :</h1>
                    <h1 className="text-gray-700 text-sm md:text-base">{selectedUser.coment}</h1>
                  </div>
                  <div className="flex items-center mt-[15px] px-[20px] md:px-0 justify-between md:justify-start">
                    <button className="text-gray-500 text-sm md:text-base">посмотреть перевод</button>
                    <FavoriteBorderIcon
                      sx={{
                        color: "gray",
                        fontSize: "20px",
                        marginLeft: { xs: "0px", md: "270px" },
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <input
                    className="border-t border-gray-400 w-full md:w-[510px] mt-[30px] md:mt-[170px] h-[48px] pl-[20px]"
                    placeholder="написать коментарий"
                    type="text"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const value = (e.target as HTMLInputElement).value
                        if (selectedUser) selectedUser.coment = value
                        ;(e.target as HTMLInputElement).value = ""
                        setData([...data])
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </Dialog>
        </div>
      </div>
    </div>
  )
}
