"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/registry/cmplt/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/registry/cmplt/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/cmplt/ui/dropdown-menu";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import { Input } from "@/registry/cmplt/ui/input";
import { Checkbox } from "@/registry/cmplt/ui/checkbox";
import {
  Search,
  MoreHorizontal,
  Download,
  Trash2,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

interface DeploymentItem {
  id: string;
  project: string;
  branch: string;
  commit: string;
  status: "active" | "building" | "failed";
  duration: string;
  updated: string;
}

const initialDeployments: DeploymentItem[] = [
  {
    id: "dep_981a",
    project: "cmplt-design-system",
    branch: "main",
    commit: "feat(blocks): add 10 new blocks",
    status: "active",
    duration: "42s",
    updated: "2m ago",
  },
  {
    id: "dep_980c",
    project: "docs-portal",
    branch: "staging",
    commit: "docs(tokens): oklch gamut chart",
    status: "active",
    duration: "38s",
    updated: "15m ago",
  },
  {
    id: "dep_979f",
    project: "registry-api",
    branch: "feat/endpoints",
    commit: "refactor(registry): build 68 json files",
    status: "building",
    duration: "1m 12s",
    updated: "28m ago",
  },
  {
    id: "dep_978b",
    project: "landing-page",
    branch: "experiment/hero",
    commit: "test: three.js dynamic particles",
    status: "active",
    duration: "55s",
    updated: "1h ago",
  },
  {
    id: "dep_977x",
    project: "figma-plugin",
    branch: "fix/variable-sync",
    commit: "fix: token collection namespace",
    status: "failed",
    duration: "14s",
    updated: "3h ago",
  },
];

export function DataTableToolbarBlock() {
  const [search, setSearch] = React.useState("");
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const filtered = initialDeployments.filter(
    (d) =>
      d.project.toLowerCase().includes(search.toLowerCase()) ||
      d.commit.toLowerCase().includes(search.toLowerCase()) ||
      d.branch.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAll = () => {
    if (selectedIds.length === filtered.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filtered.map((d) => d.id));
    }
  };

  const toggleOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="rounded-panel border border-border-default bg-surface shadow-xs w-full overflow-hidden">
      {/* Search & Actions Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border-b border-border-subtle bg-surface">
        <div className="flex items-center gap-2 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 size-3.5 text-fg-muted" />
            <Input
              placeholder="Filter deployments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-8 pl-8 text-xs bg-subtle/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {selectedIds.length > 0 && (
            <Button variant="danger" size="sm" className="h-8 gap-1.5 text-xs animate-in fade-in">
              <Trash2 className="size-3.5" />
              <span>Delete ({selectedIds.length})</span>
            </Button>
          )}

          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Export</span>
          </Button>

          <Button size="sm" className="h-8 gap-1 text-xs">
            <span>New Deployment</span>
          </Button>
        </div>
      </div>

      {/* Table Surface */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                checked={selectedIds.length === filtered.length && filtered.length > 0}
                onCheckedChange={toggleAll}
                aria-label="Select all rows"
              />
            </TableHead>
            <TableHead>Deployment</TableHead>
            <TableHead>Branch &amp; Commit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="w-10 text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <TableRow key={item.id} className={isSelected ? "bg-brand/5" : undefined}>
                <TableCell>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => toggleOne(item.id)}
                    aria-label={`Select deployment ${item.id}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="font-semibold text-fg text-xs">{item.project}</div>
                  <div className="font-mono text-[10px] text-fg-muted">{item.id}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs text-brand">{item.branch}</span>
                  </div>
                  <div className="text-[11px] text-fg-muted truncate max-w-[200px]">
                    {item.commit}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "active"
                        ? "success"
                        : item.status === "building"
                        ? "warning"
                        : "danger"
                    }
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-xs text-fg-secondary cmplt-tabular">
                  {item.duration}
                </TableCell>
                <TableCell className="font-mono text-xs text-fg-muted cmplt-tabular">
                  {item.updated}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="sm" className="size-7 p-0">
                          <MoreHorizontal className="size-4" />
                          <span className="sr-only">Row actions</span>
                        </Button>
                      }
                    />
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Runtime Logs</DropdownMenuItem>
                      <DropdownMenuItem>Promote to Production</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-status-danger">
                        Cancel Build
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between p-3 border-t border-border-subtle bg-surface text-xs text-fg-muted">
        <div>
          Showing <span className="font-semibold text-fg font-mono">{filtered.length}</span> of 48 deployments
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
