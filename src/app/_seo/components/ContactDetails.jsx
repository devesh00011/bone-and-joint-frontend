// Verified contact details only (values taken from the existing Footer and ContactSensitives).
import { MobileNumber, TelePhoneNumber } from '@/app/WebSensitives/ContactSensitives'
import { HOSPITAL_ADDRESS, HOSPITAL_EMAIL, OPD_HOURS } from '../site'

export default function ContactDetails() {
  return (
    <address className="not-italic bg-gray-50 rounded-lg p-6 border border-gray-100 text-gray-700 space-y-2 break-words">
      <p className="font-semibold text-gray-800">Bone and Joint Hospital and Research Centre</p>
      <p>{HOSPITAL_ADDRESS}</p>
      <p>
        Phone: <a className="inline-block py-2 text-[#007D96] font-semibold underline rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B4D8]" href={`tel:${MobileNumber}`}>{MobileNumber}</a>
        {' / '}
        <a className="inline-block py-2 text-[#007D96] font-semibold underline rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B4D8]" href={`tel:${TelePhoneNumber}`}>{TelePhoneNumber}</a>
      </p>
      <p>
        Email: <a className="inline-block py-2 text-[#007D96] font-semibold underline rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B4D8]" href={`mailto:${HOSPITAL_EMAIL}`}>{HOSPITAL_EMAIL}</a>
      </p>
      <p>OPD: {OPD_HOURS}</p>
    </address>
  )
}
