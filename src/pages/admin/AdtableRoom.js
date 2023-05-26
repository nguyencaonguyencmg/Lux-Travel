import React from 'react';
import './css/admin.css'
import {createActions} from 'redux-actions';
import { Link } from 'react-router-dom';


function AdTableRoom(){
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
                            <th scope="col" className="" style={{width :"7%",}}>ID</th>
                            <th scope="col" className="" style={{width :"8%",}}>Name</th>
                            <th scope="col" className="" style={{width :"35%",}}>Img</th>
                            <th scope="col" className="" style={{width :"30%",}}>Title</th>
                            <th scope="col" className="" style={{width :"10%",}}>Price</th>
                            <th scope="col" className="" style={{width :"10%",}}>Location</th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr style={{textAlign: 'center'}}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> DN1 </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Neo-Hotel </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <img className="h-10 w-10 rounded-full" src="../assets/img/homestay/ht1 (1).jpg" alt=""/>
                                
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Neo-classNameic là nơi lý tưởng để bạn nghỉ ngơi, thiết kế với phong cách tân cổ điển, cùng 2 phòng ngủ lớn và nhà bếp. Rất gần với biển và các điểm tham quan du lịch nổi tiếng. Chỉ mất 1 phút đi bộ đến bãi biển Phạm Văn Đồng và nhà hàng hải sản Bé Mặn, 10 phút đi bộ đến bãi biển Mỹ Khê. Hay mất 5 phút lái xe đến núi Khỉ và 10 phút lái xe đến trung tâm thành phố.</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> 1.990.000VND </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Đà Nẵng</td>
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
export default AdTableRoom;

