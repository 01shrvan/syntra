import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";

export function WorkspaceList({ workspaces }: { workspaces: Workspace[] }) {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-2"></div>
    </TooltipProvider>
  );
}
