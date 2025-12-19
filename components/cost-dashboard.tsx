"use client"

import { Card } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Pie,
  PieChart,
} from "recharts"
import { DollarSign, TrendingUp, Layers } from "lucide-react"

// Sample data for Cost by Phase
const phaseData = [
  { phase: "Planning", cost: 45000 },
  { phase: "Design", cost: 68000 },
  { phase: "Development", cost: 125000 },
  { phase: "Testing", cost: 52000 },
  { phase: "Deployment", cost: 38000 },
]

// Sample data for Cost by Category
const categoryData = [
  { name: "Labor", value: 185000, color: "oklch(0.65 0.25 264)" },
  { name: "Materials", value: 78000, color: "oklch(0.70 0.19 162)" },
  { name: "Equipment", value: 42000, color: "oklch(0.77 0.19 70)" },
  { name: "Services", value: 23000, color: "oklch(0.63 0.27 304)" },
]

// Sample data for Cumulative Cost vs Time
const cumulativeData = [
  { month: "Jan", cost: 45000 },
  { month: "Feb", cost: 113000 },
  { month: "Mar", cost: 238000 },
  { month: "Apr", cost: 290000 },
  { month: "May", cost: 328000 },
]

const totalCost = categoryData.reduce((sum, item) => sum + item.value, 0)
const avgMonthlyCost = cumulativeData[cumulativeData.length - 1].cost / cumulativeData.length

export function CostDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Cost Dashboard</h1>
        <p className="text-muted-foreground">Track and analyze project costs across phases and categories</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Cost</p>
              <p className="text-2xl font-bold text-foreground">${totalCost.toLocaleString()}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg Monthly Cost</p>
              <p className="text-2xl font-bold text-foreground">${Math.round(avgMonthlyCost).toLocaleString()}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Phases</p>
              <p className="text-2xl font-bold text-foreground">{phaseData.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
              <Layers className="h-6 w-6 text-chart-3" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Cost by Phase */}
        <Card className="border-border bg-card p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">Cost by Phase</h2>
            <p className="text-sm text-muted-foreground">Breakdown of costs across project phases</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={phaseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0 0)" />
              <XAxis dataKey="phase" stroke="oklch(0.556 0 0)" fontSize={12} tickLine={false} />
              <YAxis
                stroke="oklch(0.556 0 0)"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.145 0 0)",
                  border: "1px solid oklch(0.25 0 0)",
                  borderRadius: "8px",
                  color: "oklch(0.985 0 0)",
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Cost"]}
              />
              <Bar dataKey="cost" fill="oklch(0.65 0.25 264)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Cost by Category */}
        <Card className="border-border bg-card p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground">Cost by Category</h2>
            <p className="text-sm text-muted-foreground">Distribution of costs across categories</p>
          </div>
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.145 0 0)",
                    border: "1px solid oklch(0.25 0 0)",
                    borderRadius: "8px",
                    color: "oklch(0.985 0 0)",
                  }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-semibold text-foreground">${(item.value / 1000).toFixed(0)}k</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Cumulative Cost vs Time - Full Width */}
      <Card className="border-border bg-card p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground">Cumulative Cost vs Time</h2>
          <p className="text-sm text-muted-foreground">Total accumulated costs over time</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cumulativeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0 0)" />
            <XAxis dataKey="month" stroke="oklch(0.556 0 0)" fontSize={12} tickLine={false} />
            <YAxis
              stroke="oklch(0.556 0 0)"
              fontSize={12}
              tickLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.145 0 0)",
                border: "1px solid oklch(0.25 0 0)",
                borderRadius: "8px",
                color: "oklch(0.985 0 0)",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Cost"]}
            />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="oklch(0.70 0.19 162)"
              strokeWidth={3}
              dot={{ fill: "oklch(0.70 0.19 162)", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
