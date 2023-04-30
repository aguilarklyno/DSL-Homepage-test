import React from 'react'
import { client } from 'libs/client';
import PageTitle from '@/components/atoms/PageTitle';

export default function BlogId({ blog }) {
  return (
    <main  className='flex flex-col items-center'>
      <div className='text-gray-900 bg-gray-50 base-layout space-y-8 mt-20 pb-32 w-[90%] sm:w-11/12 lg:w-4/5 rounded-t-3xl border-[1px] border-gray-200 '>
        <PageTitle title={blog.title} subtitle={blog.date}/>
        <div
          className='w-11/12 sm:w-10/12 lg:w-9/12 text-xs sm:text-sm lg:text-md '
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </div>
    </main> 
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};