"use client"
import { useTranslations } from "next-intl"

interface SidebarProps {
  onSearch: (query: string) => void
  filters: { [key: string]: boolean }
  onFilterChange: (key: string) => void
}

export default function Sidebar({ onSearch, filters, onFilterChange }: SidebarProps) {
  const t = useTranslations("HomePage")

  const categories = ["Автовакзал", "1 - Советский", "101 мкр"]
  const programs = [t("a51"), t("a52"), t("a53")]

  return (
    <div className="w-full p-6 lg:mt-[100px] bg-gray-50 min-h-screen">
      {/* Search Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Поиск</label>
        <input
          type="text"
          placeholder="Введите имя..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Районы</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[category] || false}
                onChange={() => onFilterChange(category)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Programs Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Программы</h3>
        <div className="space-y-3">
          {programs.map((program) => (
            <label key={program} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[program] || false}
                onChange={() => onFilterChange(program)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{program}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
