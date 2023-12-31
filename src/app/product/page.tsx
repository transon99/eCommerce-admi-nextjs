'use client';

import CardItem from '@/app/product/components/CardItem';
import ListBoxs from '@/components/ListBox';
import Search from '@/components/Search';
import { Button, Flex, Text } from '@radix-ui/themes';
import { BsCpu } from 'react-icons/bs';
import { PiPlusCircleBold } from 'react-icons/pi';
import AddCategoryDiaglog from './components/AddCategoryDiaglog';
import AddBrandDiaglog from './components/AddBrandDiaglog';

const Product = () => {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div
        className="card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
    lg:items-center lg:gap-4 "
      >
        <h1 className="text-white flex-1 text-center lg:text-left text-4xl font-bold bg-[#171F29] rounded-lg !p-5 md:!p-[26px] lg:!py-5">
          Products Management
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-4  md:flex-col lg:flex-row lg:justify-between p-5 pt-0">
        <Flex direction={'column'} gap={'3'}>
          <Button
            size="3"
            variant="soft"
            radius="full"
            className="w-full cursor-pointer"
          >
            Add new product
            <PiPlusCircleBold />
          </Button>
          <AddCategoryDiaglog />
          <AddBrandDiaglog />
        </Flex>
        <div className="relative lg:w-[326px]">
          <Search placeholder="Search Product ..." />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-2 mb-4 items-center justify-between">
          <Text>
            Products:{' '}
            <Text weight={'bold'}>
              All <Text weight={'light'}>(16)</Text>
            </Text>
          </Text>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Flex
            align={'center'}
            gap={'3'}
            className=" bg-[#171F29] card !p-5  items-center gap-4 min-w-[218px] rounded-xl"
          >
            <div className="p-2 bg-[#263E7B] rounded-lg">
              <BsCpu />
            </div>
            <Text as={'p'} size={'5'} weight={'bold'}>
              CPU
            </Text>
          </Flex>
          <div className="flex gap-2.5 sm:gap-[26px]">
            <ListBoxs />
            <ListBoxs />
          </div>
        </div>
      </div>
      <div
        className="grid flex-1 items-start gap-[26px] mb-[30px] sm:  md:grid-cols-2
                 lg:grid-cols-3 2xl:grid-cols-6 p-5"
      >
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default Product;
