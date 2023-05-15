import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableSinhVien extends Component {

  render() {
    console.log(this.props.mangSinhVien)
    return (
      <div className='container'>
        <table className="table">
            <thead>
                <tr className='bg-dark text-white'>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </table>
      </div>
    )
  }
}

// Hàm lấy dữ liệu 
const mapStateToProps = (state) => {
    return {
        mangSinhVien:state.QuanlySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps,null)(TableSinhVien)