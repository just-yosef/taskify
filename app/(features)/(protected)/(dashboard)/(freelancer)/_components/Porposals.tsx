import { GridContainer, GridItem } from "../../(shared)/_components";
import { TitleSection } from "@/app/(shared)/_components";
import { Proposal } from "../types";
import { BadgeDollarSign, Clock2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Porposals = () => {
  const proposals: Proposal[] = [
    {
      id: 1,
      projectTitle: "تصميم واجهة تطبيق تعليمي",
      freelancerName: "محمد خالد",
      price: 350,
      duration: 7,
      status: "pending",
      submittedAt: "2025-10-10",
      message:
        "سأقوم بتصميم واجهة احترافية للتطبيق باستخدام Figma وأسلوب حديث متجاوب.",
    },
    {
      id: 2,
      projectTitle: "موقع تجارة إلكترونية",
      freelancerName: "سارة علي",
      price: 1200,
      duration: 14,
      status: "accepted",
      submittedAt: "2025-10-09",
      message: "سأنفذ المشروع باستخدام Next.js وTailwind مع لوحة تحكم مخصصة.",
    },
    {
      id: 3,
      projectTitle: "نظام إدارة مهام للشركات",
      freelancerName: "أحمد يوسف",
      price: 800,
      duration: 10,
      status: "rejected",
      submittedAt: "2025-10-08",
      message:
        "النظام سيحتوي على لوحة تحكم متقدمة وواجهة مستخدم بسيطة باستخدام React.",
    },
    {
      id: 4,
      projectTitle: "تحسين SEO لموقع خدمات",
      freelancerName: "منة إبراهيم",
      price: 250,
      duration: 5,
      status: "pending",
      submittedAt: "2025-10-11",
      message:
        "سأقوم بتحليل الكلمات المفتاحية وتحسين أداء الموقع لمحركات البحث.",
    },
  ];
  return (
    <>
      <TitleSection text="Porposals" />
      <GridContainer distance="wd">
        {proposals.map(
          ({
            projectTitle,
            status,
            price,
            id,
            duration,
            message,
            submittedAt,
          }) => (
            <GridItem
              actions={
                <>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                  <Button variant="emerald" size="sm" className="ml-1">
                    Edit
                  </Button>
                </>
              }
              title={projectTitle}
              status={status}
              cardContent={
                <>
                  <p> {message} </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 flex gap-2">
                      <BadgeDollarSign size={24} className="text-green-600" />
                      Budget: <b>{price}$</b>
                    </p>
                    <span className="text-sm text-gray-500 flex gap-2 mt-1 ml-0">
                      <Clock2 className="text-peach" size={22} />
                      Duration: <b>{duration} Days</b>
                    </span>
                  </div>
                  <p>
                    تم التقديم يوم
                    <b className="mx-2">{submittedAt}</b>
                  </p>
                </>
              }
              variant="sky"
              key={id}
            />
          )
        )}
      </GridContainer>
    </>
  );
};

export default Porposals;
