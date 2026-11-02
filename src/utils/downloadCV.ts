/**
 * CV DOWNLOAD UTILITY
 * 
 * Sourced directly from Shreya Ghimire's official Curriculum Vitae (CV)
 * uploaded to /public/assets/images/ShreyaGhimire_final_41217112.pdf (514 KB).
 */

export const CV_PDF_PATH = '/assets/images/ShreyaGhimire_final_41217112.pdf';
export const CV_ALT_PATH = '/Shreya_Ghimire_CV.pdf';
export const CV_FILE_NAME = 'Shreya_Ghimire_CV.pdf';

/**
 * Downloads the complete PDF binary by fetching it directly as a Blob,
 * creating an in-memory object URL with application/pdf MIME type,
 * ensuring the resulting file contains the full 514 KB content.
 */
export async function downloadResume(): Promise<boolean> {
  try {
    // Attempt fetch from primary path, fallback to alt path if needed
    let response = await fetch(CV_PDF_PATH, { cache: 'no-store' });
    if (!response.ok) {
      response = await fetch(CV_ALT_PATH, { cache: 'no-store' });
    }
    
    if (!response.ok) {
      throw new Error(`Failed to load CV: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    if (blob.size < 1000) {
      throw new Error(`Invalid PDF payload size: ${blob.size} bytes`);
    }

    // Force application/pdf blob
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = CV_FILE_NAME;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();

    setTimeout(() => {
      if (document.body.contains(anchor)) {
        document.body.removeChild(anchor);
      }
      window.URL.revokeObjectURL(blobUrl);
    }, 10000);

    return true;
  } catch (error) {
    console.warn('Direct blob download encountered an issue, opening in new tab:', error);
    // Direct open fallback
    window.open(CV_PDF_PATH, '_blank', 'noopener,noreferrer');
    return false;
  }
}

/**
 * Opens the CV directly in a new browser tab for viewing/printing
 */
export function viewResumeInNewTab(): void {
  window.open(CV_PDF_PATH, '_blank', 'noopener,noreferrer');
}
