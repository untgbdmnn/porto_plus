import React from 'react';

type ParamsProps = {
  params: {
    portoname: string;
  };
};

export default function DetailPorto({ params }: ParamsProps) {
  const { portoname } = params;

  return (
    <div>
      <h1>Detail Portofolio</h1>
      <p>Nama Portofolio: {portoname}</p>
    </div>
  );
}

// Generate static paths
export async function generateStaticParams() {
  return [
    { portoname: 'project-1' },
    { portoname: 'project-2' },
  ];
}