import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters:</span>
          <Input placeholder="Client name" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identifier</TableHead>
                <TableHead className="w-[180px]">Date</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="w-[140px]">Total</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Order details</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      821e78f7asdhdf128h
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      15 minutes ago
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">
                          Pending
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      Leandro Dal Molin
                    </TableCell>
                    <TableCell className="font-medium">£149.90</TableCell>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Approve
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="mr-2 h-3 w-3" />
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
