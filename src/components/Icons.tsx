import React from 'react';

const iconProps = {
    className: "h-8 w-8 text-neon-turquoise mr-4 shrink-0",
    strokeWidth: 1.5
};
const learnMoreIconProps = {
    className: "h-6 w-6 text-neon-turquoise mr-4 shrink-0",
    strokeWidth: 2
};
const footerIconProps = {
  className: "h-6 w-6",
  strokeWidth: 2
};
const proConIconProps = {
    className: "h-5 w-5 mr-2 shrink-0",
    strokeWidth: 2
}

export const UsersIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...iconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
export const DnaIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...iconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M15.3 19.3c-1.2-1.2-1.2-3.1 0-4.2s3.1-1.2 4.2 0c1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0Z"/><path d="M8.7 4.7c-1.2-1.2-3.1-1.2-4.2 0s-1.2 3.1 0 4.2s3.1 1.2 4.2 0c1.2-1.2 1.2-3.1 0-4.2Z"/><path d="m14 8-1.8-1.8c-1.2-1.2-3.1-1.2-4.2 0l-2.4 2.4c-1.2 1.2-1.2 3.1 0 4.2l1.8 1.8"/><path d="m10 16 1.8 1.8c1.2 1.2 3.1 1.2 4.2 0l2.4-2.4c1.2-1.2 1.2-3.1 0-4.2l-1.8-1.8"/></svg>;
export const FileTextIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...iconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
export const ScanFaceIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...iconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>;

export const BookOpenIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...learnMoreIconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
export const VideoIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...learnMoreIconProps} strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>;
export const GraduationCapIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...learnMoreIconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;

export const GithubIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...footerIconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
export const LinkedinIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...footerIconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
export const TwitterIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...footerIconProps} strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1-2.8 1.4-4.2 1.7-1.4 5.3-6.1 9.1-11.7 8.9-1.2 0-2.4-.2-3.6-.6h.3c.7 0 1.4-.1 2.1-.3 1.1-.3 2.2-.7 3.2-1.2.9-.5 1.8-1 2.7-1.7-1.1 0-2.2-.3-3.1-.9-.8-.5-1.4-1.3-1.8-2.3s-.4-2.1-.2-3.1c.7.4 1.5.7 2.3.8-.9-.6-1.6-1.4-2-2.4-.4-1-.5-2.1-.2-3.1s.8-1.8 1.6-2.5c.8-.7 1.8-1.1 2.8-1.3 1-.2 2.1 0 3.1.3 1 .3 1.9.8 2.7 1.5.7.6 1.3 1.4 1.7 2.2.9-.2 1.8-.5 2.6-1 .2.9.2 1.9-.2 2.8-.8.2-1.5.2-2.3.2.5-.1 1.1-.2 1.6-.4.1.8.1 1.7-.2 2.5-.3.8-.7 1.5-1.3 2.1z"/></svg>;

export const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...proConIconProps} strokeLinecap="round" strokeLinejoin="round" className={className || "h-5 w-5 mr-2 shrink-0 text-green-400"}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
export const XCircleIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...proConIconProps} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 shrink-0 text-red-400"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>;
export const AlertTriangleIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "h-5 w-5 mr-2 shrink-0 text-yellow-400"}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;