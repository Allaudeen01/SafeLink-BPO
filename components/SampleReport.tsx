import React from 'react';
import { Download, FileText } from 'lucide-react';

const SampleReport: React.FC = () => {
  const employees = [
    { name: "Rakib", id: "EMP-004", role: "Cashier", hours: "18h 16m", status: "Verified" },
    { name: "Shargiya", id: "EMP-012", role: "Manager", hours: "39h 41m", status: "Verified" },
    { name: "Aziza", id: "EMP-009", role: "Stock", hours: "27h 38m", status: "Verified" },
    { name: "Qasim", id: "EMP-003", role: "Supervisor", hours: "53h 40m", status: "Verified" },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Sample Weekly Report</h2>
          <p className="text-slate-600">
            Delivered every Monday in Excel & PDF format. Clear, undisputed data for your payroll team.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-800 rounded">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">Weekly Attendance Log</h3>
                <p className="text-xs text-slate-400">Store: Coventry Shell Store • Week: Nov 11 – Nov 17</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-xs font-medium bg-cyan-600 hover:bg-cyan-500 px-3 py-1.5 rounded transition-colors">
              <Download className="w-4 h-4" /> Download Sample PDF
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Employee Name</th>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Total Hours</th>
                  <th className="px-6 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {employees.map((emp, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">{emp.name}</td>
                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{emp.id}</td>
                    <td className="px-6 py-4 text-slate-600">{emp.role}</td>
                    <td className="px-6 py-4 font-mono font-bold text-cyan-700 text-base">{emp.hours}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 border-t border-slate-200">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-right font-medium text-slate-500">Total Store Hours:</td>
                  <td className="px-6 py-4 font-bold text-slate-900 text-lg">139h 15m</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
           <p className="text-sm text-slate-500 italic flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
             Also includes daily breakdown: Entry Time, Exit Time, and Break Deductions.
           </p>
        </div>
      </div>
    </section>
  );
};

export default SampleReport;