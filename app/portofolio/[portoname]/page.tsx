import React from 'react';

export default function DetailPorto({ params }: { params: { portoname: string } }) {
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