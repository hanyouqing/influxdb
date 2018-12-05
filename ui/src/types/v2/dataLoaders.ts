// Types
import {
  TelegrafPluginInputCpu,
  TelegrafPluginInputDisk,
  TelegrafPluginInputDiskio,
  TelegrafPluginInputDocker,
  TelegrafPluginInputFile,
  TelegrafPluginInputKernel,
  TelegrafPluginInputKubernetes,
  TelegrafPluginInputLogParser,
  TelegrafPluginInputMem,
  TelegrafPluginInputNet,
  TelegrafPluginInputNetResponse,
  TelegrafPluginInputNgnix,
  TelegrafPluginInputProcesses,
  TelegrafPluginInputProcstat,
  TelegrafPluginInputPrometheus,
  TelegrafPluginInputRedis,
  TelegrafPluginInputSyslog,
  TelegrafPluginInputSwap,
  TelegrafPluginInputSystem,
  TelegrafPluginInputTail,
  TelegrafPluginOutputFile,
  TelegrafPluginOutputInfluxDBV2,
} from 'src/api'

export enum ConfigurationState {
  Unconfigured = 'unconfigured',
  Configured = 'configured',
}

export enum DataLoaderType {
  CSV = 'CSV',
  Streaming = 'Streaming',
  LineProtocol = 'Line Protocol',
  Empty = '',
}

export type Plugin =
  | TelegrafPluginInputCpu
  | TelegrafPluginInputDisk
  | TelegrafPluginInputDiskio
  | TelegrafPluginInputDocker
  | TelegrafPluginInputFile
  | TelegrafPluginInputKernel
  | TelegrafPluginInputKubernetes
  | TelegrafPluginInputLogParser
  | TelegrafPluginInputMem
  | TelegrafPluginInputNet
  | TelegrafPluginInputNetResponse
  | TelegrafPluginInputNgnix
  | TelegrafPluginInputProcesses
  | TelegrafPluginInputProcstat
  | TelegrafPluginInputPrometheus
  | TelegrafPluginInputRedis
  | TelegrafPluginInputSyslog
  | TelegrafPluginInputSwap
  | TelegrafPluginInputSystem
  | TelegrafPluginInputTail
  | TelegrafPluginOutputFile
  | TelegrafPluginOutputInfluxDBV2

export interface TelegrafPlugin {
  name: TelegrafPluginName
  configured: ConfigurationState
  active: boolean
  plugin?: Plugin
}

export type TelegrafPluginName =
  | TelegrafPluginInputCpu.NameEnum.Cpu
  | TelegrafPluginInputDisk.NameEnum.Disk
  | TelegrafPluginInputDiskio.NameEnum.Diskio
  | TelegrafPluginInputDocker.NameEnum.Docker
  | TelegrafPluginInputFile.NameEnum.File
  | TelegrafPluginInputKernel.NameEnum.Kernel
  | TelegrafPluginInputKubernetes.NameEnum.Kubernetes
  | TelegrafPluginInputLogParser.NameEnum.Logparser
  | TelegrafPluginInputMem.NameEnum.Mem
  | TelegrafPluginInputNet.NameEnum.Net
  | TelegrafPluginInputNetResponse.NameEnum.NetResponse
  | TelegrafPluginInputNgnix.NameEnum.Ngnix
  | TelegrafPluginInputProcesses.NameEnum.Processes
  | TelegrafPluginInputProcstat.NameEnum.Procstat
  | TelegrafPluginInputPrometheus.NameEnum.Prometheus
  | TelegrafPluginInputRedis.NameEnum.Redis
  | TelegrafPluginInputSyslog.NameEnum.Syslog
  | TelegrafPluginInputSwap.NameEnum.Swap
  | TelegrafPluginInputSystem.NameEnum.System
  | TelegrafPluginInputTail.NameEnum.Tail
  | TelegrafPluginOutputFile.NameEnum.File
  | TelegrafPluginOutputInfluxDBV2.NameEnum.InfluxdbV2

export enum LineProtocolTab {
  UploadFile = 'uploadFile',
  EnterManually = 'enterManually',
  EnterURL = 'enterURL',
}

export enum LineProtocolStatus {
  ImportData = 'importData',
  Loading = 'enterManually',
  Success = 'success',
  Error = 'error',
}
