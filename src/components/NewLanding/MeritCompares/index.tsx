import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import check from "@/public/images/new-landing/material-symbols_check.svg";
import grad from "@/public/images/new-landing/gradbr.png";

export const ComparisonTable: React.FC = () => {
  return (
    <div className="relative w-full">
      <Image src={grad} alt="grad" className="absolute right-0 top-[-450px]" />
      <div className="max-w-[1340px] mx-auto mob:px-5 mt-[200px] relative mob:mt-[103px]">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          {/* <Text className="text-[28px] mob:text-[24px] font-bold font-inter w-full max-w-[1200px] text-center mb-[106px] mob:mb-[50px] mx-auto">
          <span className="text-accentGreen"> MERIT</span> eliminates{" "}
          <span className="text-accentGreen">
            {" "}
            bottlenecks in teaming, staffing, and business development
          </span>
          —so you can focus on winning and executing, not searching.
        </Text> */}
          <Text className="text-[48px] mob:text-[32px] font-bold font-inter w-full max-w-[1200px] text-center mb-[106px] mob:mb-[50px] mx-auto">
            How <span className="text-accentGreen"> MERIT</span> Compares to
            Market Alternatives
          </Text>
        </div>
        {/* Wrap the table in a container for horizontal scrolling on mobile */}
        <div
          className="overflow-x-scroll custom-scrollbar"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <th
                  className="p-2 mob:p-1 text-center border-r border-gray-300 mob:w-full"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="font-semibold text-[24px] mob:w-[300px]">
                    Feature
                  </Text>
                </th>
                <th className="p-[60px] mob:p-2 center-center">
                  <Text className="text-[16px] font-semibold mob:w-[150px]">
                    MERIT
                  </Text>
                </th>
                <th className="p-2 mob:p-1 text-centerer">
                  <Text className="text-[16px] font-semibold mob:w-[150px]">
                    GovWin &amp; Market Intelligence
                    <br />
                    (GovWin, BDOV, etc.)
                  </Text>
                </th>
                <th className="p-2 mob:p-1 text-centerer">
                  <Text className="text-[16px] font-semibold mob:w-[150px]">
                    Recruiting &amp; HR Platforms
                    <br />
                    (LinkedIn, JazzHR, Paylocity, Workday, etc.)
                  </Text>
                </th>
                <th className="p-2 mob:p-1 text-center">
                  <Text className="text-[16px] font-semibold mob:w-[150px]">
                    Business Intelligence &amp; Analytics
                    <br />
                    (Sisense, Pyramid Analytics, etc.)
                  </Text>
                </th>
                <th className="p-2 mob:p-1 text-center">
                  <Text className="text-[16px] font-semibold mob:w-[150px]">
                    CRM &amp; BD Management
                    <br />
                    (Salesforce, HubSpot, Unanet, Deltek)
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    AI-Driven Business &amp; Talent Matching
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Limited</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
              </tr>

              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    Teaming &amp; Subcontractor Discovery
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Partial</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
              </tr>

              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    Internal &amp; External Relationship-Based Matching
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Limited</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Limited</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Limited</Text>
                  </div>
                </td>
              </tr>

              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    Dynamic Talent &amp; Partner Scoring
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Limited</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
              </tr>

              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    Strategic Decision Support for BD &amp; Hiring
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Partial</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Partial</Text>
                  </div>
                </td>
              </tr>

              <tr
                className="border-b"
                style={{ borderBottom: "1px solid #30434D" }}
              >
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    Predictive BD Intelligence &amp; Market Insights
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Partial</Text>
                  </div>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1 align-middle">
                  <div className="flex items-center justify-center gap-2 leading-none">
                    <Image
                      src={check}
                      alt="check"
                      width={24}
                      height={24}
                      className="block"
                    />
                    <Text className="text-[20px] leading-none">Partial</Text>
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  className="p-3 mob:p-2 border-r border-gray-300"
                  style={{ borderRight: "1px solid #30434D" }}
                >
                  <Text className="text-[18px] font-bold">
                    Cross-Team Collaboration for BD, HR &amp; Ops
                  </Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Text className="text-[18px] text-center">❌</Text>
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
                <td className="p-2 mob:p-1">
                  <Image
                    src={check}
                    alt="check"
                    className="mx-auto"
                    height={24}
                    width={24}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
