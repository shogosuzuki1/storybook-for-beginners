"use client";

import {
  Container,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { VIEW_MODE_VARIANT } from "./constants";
import EmployeeList from "./employee-list";
import PartnerCompanyList from "./partner-company-list";
import { EmployeeData, PartnerCompanyData } from "./types";

export default function Company({
  employee,
  partnerCompany,
}: Readonly<{ employee: EmployeeData; partnerCompany: PartnerCompanyData }>) {
  const [viewMode, setViewMode] = useState("employee");
  const handleClick = (mode: string) => {
    const result =
      mode === VIEW_MODE_VARIANT.EMPLOYEE
        ? VIEW_MODE_VARIANT.PARTNER_COMPANY
        : VIEW_MODE_VARIANT.EMPLOYEE;
    setViewMode(result);
  };
  return (
    <Container>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="text-center"
      >
        社員・協力会社
      </Typography>
      <List component="nav" className="flex">
        <ListItemButton
          onClick={() => handleClick(viewMode)}
          selected={viewMode === VIEW_MODE_VARIANT.EMPLOYEE}
        >
          <ListItemText primary="社員一覧" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleClick(viewMode)}
          selected={viewMode === VIEW_MODE_VARIANT.PARTNER_COMPANY}
        >
          <ListItemText primary="協力会社一覧" />
        </ListItemButton>
      </List>
      {viewMode === VIEW_MODE_VARIANT.EMPLOYEE && (
        <EmployeeList data={employee.data} />
      )}
      {viewMode === VIEW_MODE_VARIANT.PARTNER_COMPANY && (
        <PartnerCompanyList data={partnerCompany.data} />
      )}
    </Container>
  );
}
