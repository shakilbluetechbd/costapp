import React from 'react'
import { Pagination } from 'antd';

export default function pagination({pagination}) {
  return (
    <Pagination
      total={pagination.total}
      showTotal={total => `Total ${pagination.total} items`}
      pageSize={pagination.per_age}
      defaultCurrent={pagination.current_page}
    />
  )
}
