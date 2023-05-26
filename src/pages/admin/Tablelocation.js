import React from 'react';
import './css/admin.css'
import { Link } from 'react-router-dom';


export default function Location(){
    return(
        <React.Fragment>
            <ul className="admin-menu">
                <li >
                    <a href="#0" className="fa fa-plus-circle">
                        <i> Add New</i>
                    </a>
                </li>
            </ul>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" style={{width :"60%",}}>
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead id="table-detail" className="bg-gray-50">
                            <tr style={{textAlign: 'center'}}>
                            <th scope="col" className="" style={{width :"10%",}}>ID</th>
                            <th scope="col" className=""style={{width :"15%",}}>Name</th>
                            <th scope="col" className=""style={{width :"15%",}}>Note</th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr style={{textAlign: 'center'}}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> DN </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Đà Nẵng</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Thanh Khê, Đà Nẵng</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900 fa fa-file">Edit</a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-900 fa fa-times-circle">Delete</a>
                            </td>
                            </tr>

                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

