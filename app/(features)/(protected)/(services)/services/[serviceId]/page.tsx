const page = async ({ params }: PageProps<"/services/[serviceId]">) => {
  const { serviceId } = await params;
  return <div>page {serviceId} </div>;
};

export default page;