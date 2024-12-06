<script setup lang="ts">
interface Order {
  orderId: string
  productName: string
  sku: string
  quantity: number
  price: number
  totalPrice: number
  orderStatus: '주문완료' | '배송중' | '배송완료' | '취소됨'
  orderDate: string
  deliveryAddress: string
}

const columns = ref([
  { label: '주문 번호', key: 'orderId', sortable: true },
  { label: '상품명', key: 'productName', sortable: true },
  { label: 'SKU', key: 'sku' },
  { label: '수량', key: 'quantity' },
  { label: '가격', key: 'price', format: (value: number) => `${value.toLocaleString()}원` },
  { label: '총 금액', key: 'totalPrice', format: (value: number) => `${value.toLocaleString()}원` },
  { label: '주문 상태', key: 'orderStatus' },
  { label: '주문 날짜', key: 'orderDate' },
  { label: '배송지', key: 'deliveryAddress' },
])

const generateOrderId = (index: number) => {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, '')
  return `ORD-${date}-${String(index + 1).padStart(3, '0')}`
}

const products = [
  { name: '아이폰 15', price: 1250000 },
  { name: '갤럭시 S24', price: 1000000 },
  { name: '아이폰 14', price: 990000 },
  { name: '갤럭시 S23', price: 950000 },
]

const orderStatuses: Order['orderStatus'][] = ['주문완료', '배송중', '배송완료', '취소됨']

const generateTableData = (count: number): Order[] => {
  return Array.from({ length: count }, (_, index) => {
    const product = products[Math.floor(Math.random() * products.length)]
    const quantity = Math.floor(Math.random() * 5) + 1

    return {
      orderId: generateOrderId(index),
      productName: product.name,
      sku: `SKU${String(12345 + index).padStart(5, '0')}`,
      quantity,
      price: product.price,
      totalPrice: product.price * quantity,
      orderStatus: orderStatuses[Math.floor(Math.random() * orderStatuses.length)],
      orderDate: new Date().toISOString().slice(0, 10),
      deliveryAddress: '서울시 강남구 테헤란로 123',
    }
  })
}

const tableData = ref<Order[]>(generateTableData(50))

const handleSort = ({ column, direction }) => {
  // 정렬 로직
}

const handleRowClick = (row) => {
  // 행 클릭 처리
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold  border-solid border-b border-gray-90 pb-1 mb-5">
      DataTable
    </h1>
    <ui-datatable
      :data="tableData" :columns="columns" pagination :per-page="10" @sort="handleSort"
      @row-click="handleRowClick"
    />
  </div>
</template>
