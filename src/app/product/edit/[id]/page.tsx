'use client';

import FileInput from '@/components/FileInput';
import Search from '@/components/Search';
import { Text, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const Edit = () => {
  return (
    <div className="h-[calc(100vh-88px)] overflow-auto">
      <div
        className="card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
lg:items-center lg:gap-4"
      >
        <h1 className="text-white flex-1 text-center lg:text-left text-4xl font-bold">
          Products Editor
        </h1>
      </div>
      <div className="px-5 pb-5">
        <Text as="p" weight={'medium'} size={'5'}>
          Product Settings
        </Text>
        <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,550px)] xl:gap-10">
          <div>
            <div>
              <Text as="p" size={'2'} className="text-[#8D8D99] mt-3 mb-3">
                Product Images
              </Text>
              <div>
                <FileInput />
                <FileInput />
                <FileInput />
                <FileInput />
              </div>
            </div>
            <div>
              <Text as="p" size={'2'} className="text-[#8D8D99] mt-3 mb-3">
                Description
              </Text>
              <TextArea placeholder="Add description…" />
            </div>
          </div>
          <div>
            <div>
              <Text as="p" size={'2'} className="text-[#8D8D99] mt-3 mb-3">
                Product Name
              </Text>
              <div>
                <TextField.Root size={'3'} radius="large">
                  <TextField.Input />
                </TextField.Root>
              </div>
            </div>
            <div>
              <Text as="p" size={'2'} className="text-[#8D8D99] mt-3 mb-3">
                Description
              </Text>
              <TextArea placeholder="Add description…" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
