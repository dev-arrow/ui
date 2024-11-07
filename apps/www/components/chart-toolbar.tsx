"use client"

import { cn } from "@/lib/utils"
import { ChartCodeViewer } from "@/components/chart-code-viewer"
import { Separator } from "@/registry/new-york/ui/separator"

import "@/styles/mdx.css"
import {
  AreaChart,
  BarChartBig,
  Hexagon,
  LineChart,
  MousePointer2,
  PieChart,
  Radar,
} from "lucide-react"

import { ChartCopyButton } from "@/components/chart-copy-button"
import { Chart } from "@/components/chart-display"

export function ChartToolbar({
  chart,
  className,
  children,
}: {
  chart: Chart
} & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:h-[0.9rem] [&>svg]:w-[0.9rem]">
        <ChartTitle chart={chart} />
      </div>
      <div className="ml-auto flex items-center gap-2 [&>form]:flex">
        <ChartCopyButton
          event="copy_chart_code"
          name={chart.name}
          code={chart.files?.[0]?.content ?? ""}
          className="[&_svg]-h-3 h-6 w-6 rounded-[6px] bg-transparent text-foreground shadow-none hover:bg-muted dark:text-foreground [&_svg]:w-3"
        />
        <Separator orientation="vertical" className="mx-0 hidden h-4 md:flex" />
        <ChartCodeViewer chart={chart}>{children}</ChartCodeViewer>
      </div>
    </div>
  )
}

function ChartTitle({ chart }: { chart: Chart }) {
  const { subcategory } = chart

  if (!subcategory) {
    return null
  }

  if (subcategory === "Line") {
    return (
      <>
        <LineChart /> Chart
      </>
    )
  }

  if (subcategory === "Bar") {
    return (
      <>
        <BarChartBig /> Chart
      </>
    )
  }

  if (subcategory === "Pie") {
    return (
      <>
        <PieChart /> Chart
      </>
    )
  }

  if (subcategory === "Area") {
    return (
      <>
        <AreaChart /> Chart
      </>
    )
  }

  if (subcategory === "Radar") {
    return (
      <>
        <Hexagon /> Chart
      </>
    )
  }

  if (subcategory === "Radial") {
    return (
      <>
        <Radar /> Chart
      </>
    )
  }

  if (subcategory === "Tooltip") {
    return (
      <>
        <MousePointer2 />
        Tooltip
      </>
    )
  }

  return subcategory
}
