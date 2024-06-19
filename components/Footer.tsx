import { Container } from "./Container";
import Link from "next/link"; // Assuming 'Link' is from Next.js
import Image from "next/image"; // Assuming 'Image' is from Next.js
import React from "react";

export function Footer() {
  const navigation = [
    "About Us",
    "Our Focus",
    "Resources & Data",
    "News",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <span className="flex items-center space-x-2 text-2xl font-medium text-orange-600 dark:text-gray-100">
                  <img
                    src="https://academic.pkru.ac.th/images/Annouce/Budget/2565/PKRU.png"
                    alt="Description of the image"
                    width={180}
                    height={200}
                  />
                </span>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              มหาวิทยาลัยราชภัฏภูเก็ต
              เริ่มต้นจากการเป็นส่วนหนึ่งในสถาบันการศึกษาชั้นสูง (Higher
              Education Institution) 3 แห่ง ที่จัดตั้งขึ้นในจังหวัดต่างๆ
              ในภูมิภาค ในปี พ.ศ. 2515 โดยกรมการฝึกหัดครู กระทรวงศึกษาธิการ
              เป็นผู้ริเริ่มผลักดันให้สถาปนาขึ้นที่จังหวัดภูเก็ต บุรีรัมย์
              และลำปาง
            </div>
          </div>
          {/* Placeholder for navigation and legal sections */}
          <div className="lg:col-span-3">
            {/* Add your navigation and legal links here */}
          </div>
        </div>
      </Container>
    </div>
  );
}
