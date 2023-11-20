import { Table } from '@radix-ui/themes';
import React from 'react';

type OrderTableProps = {
  lableTHeaders: string[];
};

const OrderTable = ({ lableTHeaders }: OrderTableProps) => {
  return (
    <Table.Root className="bg-[#171F29] rounded-xl">
      <Table.Header>
        <Table.Row>
          {lableTHeaders.map((item: string) => (
            <Table.ColumnHeaderCell>{item}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default OrderTable;
