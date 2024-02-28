"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ShopsCombobox = (props: any) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const shopList = {...props.props}.shopList

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-4/5 md:w-48 lg:w-96 mb-5 lg:mb-10">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? shopList.find((shop: any) => shop.name === value)?.display
            : "ショップ名を選択"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max md:w-48 lg:w-96 p-0">
        <Command>
          <CommandInput placeholder="検索" />
          <CommandEmpty>店舗が見つかりません。</CommandEmpty>
          <CommandGroup>
            {shopList.map((shop: any) => (
              <CommandItem
                key={shop.id}
                value={shop.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === shop.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {shop.display}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ShopsCombobox;