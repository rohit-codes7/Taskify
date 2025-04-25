import React from 'react'
import { FaTasks, FaCheckCircle, FaClock, FaUser } from 'react-icons/fa'

const Dashboard = () => {
  const stats = [
    { title: 'Total Tasks', value: '50',icon: <FaTasks className="text-blue-500" /> },
    { title: 'Completed', value: '12', icon: <FaCheckCircle className="text-green-500" /> },
    { title: 'Pending', value: '8', icon: <FaClock className="text-yellow-500" /> },
    { title: 'Active Projects', value: '4', icon: <FaUser className="text-purple-500" /> },
  ]

  const recentTasks = [
    { id: 1, title: 'Complete Dashboard UI', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'User Authentication', status: 'Completed', priority: 'High' },
    { id: 3, title: 'Database Setup', status: 'Pending', priority: 'Medium' },
    { id: 4, title: 'API Integration', status: 'In Progress', priority: 'High' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back,  Rohit </h1>
        <p className="text-gray-600">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Tasks */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Tasks</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{task.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
