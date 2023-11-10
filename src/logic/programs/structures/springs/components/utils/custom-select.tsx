import { useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { PiCaretUpDownThin } from "react-icons/pi";

import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PopoverContent } from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CommandGroup } from "cmdk";
import { IInputReactEdges } from "../../interfaces/edges";
import { cn } from "@/lib/utils";

interface Props {
  collection: { id: string; name: string }[];
  edge: IInputReactEdges;
  onChange: (value: string, index: number, identifier: string) => void;
  identifier: "from" | "to";
  index: number;
}

const CustomSelect = ({
  identifier,
  collection,
  edge,
  onChange,
  index,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-48 justify-between"
          >
            {edge[identifier]}
            <PiCaretUpDownThin />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-48 p-0">
          <Command>
            <CommandInput placeholder="Seleccionar vertice..." />
            <CommandEmpty>Vertice no encontrado.</CommandEmpty>

            <CommandGroup>
              {collection.map((e) => (
                <CommandItem
                  key={e.id}
                  value={e.name}
                  onSelect={(currentValue) => {
                    onChange(currentValue, index, identifier);
                    setOpen(false);
                  }}
                >
                  {e.name}

                  <BsCheckLg
                    className={cn(
                      "ml-auto h-4 w-4",
                      edge[identifier] === e.name ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomSelect;
