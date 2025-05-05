import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock CSS imports
vi.mock('@mui/x-data-grid/esm/index.css', () => { });

// Mock MUI DataGrid
vi.mock('@mui/x-data-grid', () => {
    return {
        DataGrid: () => null
    };
}); 