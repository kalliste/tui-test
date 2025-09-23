import workerpool from "workerpool";
import { Snapshot, TestCase, TestStatus } from "../test/testcase.js";
import { BaseReporter } from "../reporter/base.js";
type WorkerResult = {
    error?: string;
    stdout?: string;
    stderr?: string;
    status: TestStatus;
    duration: number;
    snapshots: Snapshot[];
};
type WorkerExecutionOptions = {
    timeout: number;
    updateSnapshot: boolean;
};
export declare function runTestWorker(test: TestCase, importPath: string, { timeout, updateSnapshot }: WorkerExecutionOptions, trace: boolean, pool: workerpool.Pool, reporter: BaseReporter, attempt: number, traceFolder: string): Promise<WorkerResult>;
export {};
