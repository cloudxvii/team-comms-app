import { ChevronDown, ListFilter, SquarePen } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Doc } from "../../../../convex/_generated/dataModel";

interface WorkspaceHeaderProps {
  workspace: Doc<"workspaces">;
  isAdmin: boolean;
}

export const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 h-12.25 gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="transparent"
            className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
            size="sm"
          >
            <span className="truncate">{workspace.name}</span>
            <ChevronDown className="size-4 ml-1 shrink-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem className="cursor-pointer capitalize">
            <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">{workspace.name}</p>
              <p className="text-xs text-muted-foreground">Текущее пространство</p>
            </div>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer py-2 text-xs"
                onClick={() => {}}
              >
                Пригласить в {workspace.name}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer py-2 text-xs"
                onClick={() => {}}
              >
                Настройки
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <Hint label="Отфильтровать диалоги" side="bottom">
          <Button variant="transparent" size="icon-sm">
            <ListFilter className="size-4" />
          </Button>
        </Hint>
        <Hint label="Новый диалог" side="bottom">
          <Button variant="transparent" size="icon-sm">
            <SquarePen className="size-4" />
          </Button>
        </Hint>
      </div>
    </div>
  )
}

// Толик вонючка
