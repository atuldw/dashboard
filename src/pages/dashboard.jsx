import React from 'react'
import DashboardStatsGrid from '../Component/DashboardStatsGrid'
import TransactionChart from '../Component/TransactionCharts'
import RecentOrders from '../Component/RecentOrders'
import BuyerProfilePieChart from '../Component/BuyerProfilePieChart'
import PopularProducts from '../Component/TransactionCharts'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}