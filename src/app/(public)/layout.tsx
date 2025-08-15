import React from 'react'
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';

export default function PublicLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar01 />
            {children}
        </div>
    )
}
