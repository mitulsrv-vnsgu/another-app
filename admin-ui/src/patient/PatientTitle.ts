import { Patient as TPatient } from "../api/patient/Patient";

export const PATIENT_TITLE_FIELD = "id";

export const PatientTitle = (record: TPatient): string => {
  return record.id || String(record.id);
};
