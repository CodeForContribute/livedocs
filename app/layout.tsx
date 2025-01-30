import type {Metadata} from "next";
import "./globals.css";
import {ClerkProvider,} from '@clerk/nextjs'
import {dark} from "@clerk/themes";
import {cn} from "@/lib/utils";
import Provider from "@/provider";
import React from "react";

export const metadata: Metadata = {
    title: "LiveDocs",
    description: "Your go-to collaborative editor",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider appearance={
            {
                baseTheme: dark,
                variables: {
                    colorPrimary: "#3371FF",
                    fontSize: '16px'
                },
            }
        }>
            <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen font-sans antialiased")}>
            <Provider>
                {children}
            </Provider>
            </body>
            </html>
        </ClerkProvider>
    )
}
