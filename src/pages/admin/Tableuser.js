import React from 'react';
import './css/admin.css'
import { Link } from 'react-router-dom';


export default function TableUser(){
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
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead id="table-detail" className="bg-gray-50">
                            <tr style={{textAlign: 'center'}}>
                            <th scope="col" className="" style={{width :"10%",}}>ID</th>
                            <th scope="col" className=""style={{width :"25%",}}>Name</th>
                            <th scope="col" className=""style={{width :"15%",}}>Email</th>
                            <th scope="col" className=""style={{width :"15%",}}>Password</th>
                            <th scope="col" className=""style={{width :"15%",}}>Address</th>
                            <th scope="col" className=""style={{width :"15%",}}>Phone number</th>
                            <th scope="col" className=""style={{width :"5%",}}>Role</th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr style={{textAlign: 'center'}}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Admin1 </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src="../assets/img/people/Capture.png" alt=""/>
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Cao Nguyên</div>
                                </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">caonguyencmg2010@gmail.com</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">caonguyen123</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Đaklak</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> 0862515201 </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Nam</td>
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

