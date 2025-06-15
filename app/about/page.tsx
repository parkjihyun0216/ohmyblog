import React from 'react';

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">강아지가 세상을 구한다</h1>
      <div className="mb-2 text-lg">
        <strong>소속:</strong> 한신대학교
      </div>
      <div className="mb-6 text-lg">
        <strong>소개:</strong> 한신대학교에서 강아지를 좋아하는 사람들을 위해 만들어진 블로그입니다.
      </div>
      <p className="text-base text-neutral-700 dark:text-neutral-300">
        이 블로그는 강아지를 사랑하는 한신대학교 구성원들이 정보를 나누고, 소통하며, 다양한 이야기를 공유하는 공간입니다.
      </p>
    </main>
  );
} 