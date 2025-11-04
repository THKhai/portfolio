/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GETFORM_URL: string
  // Add more environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
