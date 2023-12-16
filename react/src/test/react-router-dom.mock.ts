const mockUseNavigate = jest.fn();
const mockUseParams = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn().mockImplementation(() => mockUseNavigate),
  useParams: jest.fn().mockImplementation(() => mockUseParams),
}));
