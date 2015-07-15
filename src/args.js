// http://manpages.ubuntu.com/manpages/raring/man8/iptables.8.html#tables

let args = [
  {
    names: ['table', 't'],
    arg: '-t'
  },
  // Commands
  {
    names: ['append', 'A'],
    arg: '-A'
  }, {
    names: ['check', 'chk', 'C'],
    arg: '-C'
  }, {
    names: ['delete', 'del', 'D'],
    arg: '-D'
  }, {
    names: ['insert', 'ins', 'I'],
    arg: '-I'
  }, {
    names: ['replace', 'R'],
    arg: '-R'
  }, {
    names: ['list', 'L'],
    arg: '-L'
  }, {
    names: ['list_rules', 'rules', 'S'],
    arg: '-S'
  }, {
    names: ['flush', 'F'],
    arg: '-F'
  }, {
    names: ['zero', 'Z'],
    arg: '-Z'
  }, {
    names: ['new_chain', 'N'],
    arg: '-N'
  }, {
    names: ['delete_chain', 'X'],
    arg: '-X'
  }, {
    names: ['policy', 'pol', 'P'],
    arg: '-P'
  }, {
    names: ['rename_chain', 'rename', 'E'],
    arg: '-E'
  },
  // Parameters
  {
    names: ['ipv4', 'v4'],
    arg: 'ipv4'
  }, {
    names: ['ipv6', 'v6'],
    arg: 'ipv6'
  }, {
    names: ['protocol', 'p'],
    arg: '-p'
  }, {
    names: ['source', 'src', 's'],
    arg: '-s'
  }, {
    names: ['destination', 'dest', 'dst', 'd'],
    arg: '-d'
  }, {
    names: ['sourcePort', 'srcPort', 'sport', 'sp'],
    arg: '--sport'
  }, {
    names: ['destinationPort', 'destPort', 'dstPort', 'dport', 'dp'],
    arg: '--dport'
  }, {
    names: ['match', 'm'],
    arg: '-m'
  }, {
    names: ['jump', 'j'],
    arg: '-j'
  }, {
    names: ['goto', 'g'],
    arg: '-g'
  }, {
    names: ['in_interface', 'in', 'i'],
    arg: '-i'
  }, {
    names: ['out_interface', 'out', 'o'],
    arg: '-o'
  }, {
    names: ['fragment', 'frag', 'f'],
    arg: '-f'
  }, {
    names: ['set_counters', 'counters', 'c'],
    arg: '-c'
  }, {
    names: ['sourceType', 'srcType', 'stype'],
    arg: '--src-type'
  }, {
    names: ['destinationType', 'destType', 'dstType', 'dtype'],
    arg: '--dst-type'
  }, {
    names: ['limitIfaceIn', 'limitIn'],
    arg: '--limit-iface-in'
  }, {
    names: ['limitIfaceOut', 'limitOut'],
    arg: '--limit-iface-out'
  }, {
    names: ['ahspi'],
    arg: '--ahspi'
  }, {
    names: ['clusterTotalNodes', 'clusterTotal'],
    arg: '--cluster-total-nodes'
  }, {
    names: ['clusterLocalNode', 'clusterLocal'],
    arg: '--cluster-local-node'
  }, {
    names: ['clusterLocalNodeMask', 'clusterLocalMask'],
    arg: '--cluster-local-nodemask'
  }, {
    names: ['clusterHashSeed'],
    arg: '--cluster-hash-seed'
  }, {
    names: ['comment'],
    arg: '--comment'
  }, {
    names: ['connbytesDir'],
    arg: '--connbytes-dir'
  }, {
    names: ['connbytesMode'],
    arg: '--connbytes-mode'
  }, {
    names: ['connlimitUpto'],
    arg: '--connlimit-upto'
  }, {
    names: ['connlimitAbove'],
    arg: '--connlimit-above'
  }, {
    names: ['connlimitMask'],
    arg: '--connlimit-mask'
  }, {
    names: ['connlimitSaddr'],
    arg: '--connlimit-saddr'
  }, {
    names: ['connlimitDaddr'],
    arg: '--connlimit-daddr'
  }, {
    names: ['mark'],
    arg: '--mark'
  }, {
    names: ['ctstate'],
    arg: '--ctstate'
  }, {
    names: ['ctproto'],
    arg: '--ctproto'
  }, {
    names: ['ctorigsrc'],
    arg: '--ctorigsrc'
  }, {
    names: ['ctorigdst'],
    arg: '--ctorigdst'
  }, {
    names: ['ctorigsrcport'],
    arg: '--ctorigsrcport'
  }, {
    names: ['ctorigdstport'],
    arg: '--ctorigdstport'
  }, {
    names: ['ctreplsrc'],
    arg: '--ctreplsrc'
  }, {
    names: ['ctrepldst'],
    arg: '--ctrepldst'
  }, {
    names: ['ctreplsrcport'],
    arg: '--ctreplsrcport'
  }, {
    names: ['ctrepldstport'],
    arg: '--ctrepldstport'
  }, {
		names: ['ctstatus'],
		arg: '--ctstatus'
	}, {
		names: ['ctexpire'],
		arg: '--ctexpire'
	}, {
		names: ['ctdir'],
		arg: '--ctdir'
	}, {
		names: ['cpu'],
		arg: '--cpu'
	}, {
		names: ['dccpTypes'],
		arg: '--dccp-types'
	}, {
		names: ['dccpOption'],
		arg: '--dccp-option'
	}, {
		names: ['dscp'],
		arg: '--dscp'
	}, {
		names: ['dscpClass'],
		arg: '--dscp-class'
	}, {
		names: ['ecnTcpCwr'],
		arg: '--ecn-tcp-cwr'
	}, {
		names: ['ecnTcpEce'],
		arg: '--ecn-tcp-ece'
	}, {
		names: ['ecnIpEct'],
		arg: '--ecn-ip-ect'
	}, {
		names: ['espspi'],
		arg: '--espspi'
	}, {
		names: ['hashlimitName', 'hlName'],
		arg: '--hashlimit-name'
	}, {
		names: ['hashlimitUpto', 'hlUpto'],
		arg: '--hashlimit-upto'
	}, {
		names: ['hashlimitAbove', 'hlAbove'],
		arg: '--hashlimit-above'
	}, {
		names: ['hashlimitBurst', 'hlBurst'],
		arg: '--hashlimit-burst'
	}, {
		names: ['hashlimitMode', 'hlMode'],
		arg: '--hashlimit-mode'
	}, {
		names: ['hashlimitSrcmask', 'hlSrcmask', 'hlSmask'],
		arg: '--hashlimit-srcmask'
	}, {
		names: ['hashlimitDstmask', 'hlDstmask', 'hlDmask'],
		arg: '--hashlimit-dstmask'
	}, {
		names: ['hashlimitHtableSize', 'hlHtableSize'],
		arg: '--hashlimit-htable-size'
	}, {
		names: ['hashlimitHtableMax', 'hlHtableMax'],
		arg: '--hashlimit-htable-max'
	}, {
		names: ['hashlimitHtableExpire', 'hlHtableExpire'],
		arg: '--hashlimit-htable-expire'
	}, {
		names: ['hashlimitHtableGcinterval', 'hlHtableGcinterval'],
		arg: '--hashlimit-htable-gcinterval'
	}, {
		names: ['icmpType', 'icmp'],
		arg: '--icmp-type'
	}, {
		names: ['sourceRange', 'srcRange', 'sRange'],
		arg: '--src-range'
	}, {
		names: ['destinationRange', 'destRange', 'dstRange', 'dRange'],
		arg: '--dst-range'
	}, {
		names: ['ipvs'],
		arg: '--ipvs'
	}, {
		names: ['vproto'],
		arg: '--vproto'
	}, {
		names: ['vaddr'],
		arg: '--vaddr'
	}, {
		names: ['vport'],
		arg: '--vport'
	}, {
		names: ['vdir'],
		arg: '--vdir'
	}, {
		names: ['vmethod'],
		arg: '--vmethod'
	}, {
		names: ['vportctl'],
		arg: '--vportctl'
	}, {
		names: ['length', 'len'],
		arg: '--length'
	}, {
		names: ['limit'],
		arg: '--limit'
	}, {
		names: ['limitBurst'],
		arg: '--limit-burst'
	}, {
		names: ['mac'],
		arg: '--mac'
	}, {
		names: ['mark'],
		arg: '--mark'
	}, {
		names: ['sourcePorts', 'srcPorts', 'sports'],
		arg: '--source-ports'
	}, {
		names: ['destinationPorts', 'destPorts', 'dstPorts', 'dports'],
		arg: '--destination-ports'
	}, {
		names: ['ports'],
		arg: '--ports'
	}, {
		names: ['genre'],
		arg: '--genre'
	}, {
		names: ['ttl'],
		arg: '--ttl'
	}, {
		names: ['log'],
		arg: '--log'
	}, {
		names: ['uidOwner'],
		arg: '--uid-owner'
	}, {
		names: ['gidOwner'],
		arg: '--gid-owner'
	}, {
		names: ['socketExists'],
		arg: '--socket-exists'
	}, {
		names: ['physdevIn', 'pdevIn', 'pIn'],
		arg: '--physdev-in'
	}, {
		names: ['physdevOut', 'pdevOut', 'pOut'],
		arg: '--physdev-out'
	}, {
		names: ['physdevIsIn', 'pdevIsIn', 'pIsIn'],
		arg: '--physdev-is-in'
	}, {
		names: ['physdevIsOut', 'pdevIsOut', 'pIsOut'],
		arg: '--physdev-is-out'
	}, {
		names: ['physdevIsBridged', 'pdevIsBridged', 'pIsBridged'],
		arg: '--physdev-is-bridged'
	}, {
		names: ['pktType', 'pType'],
		arg: '--pkt-type'
	}, {
		names: ['dir'],
		arg: '--dir'
	}, {
		names: ['policy', 'pol'],
		arg: '--pol'
	}, {
		names: ['strict'],
		arg: '--strict'
	}, {
		names: ['reqid'],
		arg: '--reqid'
	}, {
		names: ['spi'],
		arg: '--spi'
	}, {
		names: ['proto'],
		arg: '--proto'
	}, {
		names: ['mode'],
		arg: '--mode'
	}, {
		names: ['tunnelSrc', 'tunSrc', 'tSrc'],
		arg: '--tunnel-src'
	}, {
		names: ['tunnelDst', 'tunDst', 'tDst'],
		arg: '--tunnel-dst'
	}, {
		names: ['next'],
		arg: '--next'
	}, {
		names: ['quota'],
		arg: '--quota'
	}, {
    names: ['rateestDelta'],
    arg: '--rateest-delta'
  }, {
    names: ['rateestLt'],
    arg: '--rateest-lt'
  }, {
    names: ['rateestGt'],
    arg: '--rateest-gt'
  }, {
    names: ['rateest1'],
    arg: '--rateest1'
  }, {
    names: ['rateest2'],
    arg: '--rateest2'
  }, {
    names: ['rateestBps'],
    arg: '--rateest-bps'
  }, {
    names: ['rateestPps'],
    arg: '--rateest-pps'
  }, {
    names: ['rateestBps1'],
    arg: '--rateest-bps1'
  }, {
    names: ['rateestPps1'],
    arg: '--rateest-pps1'
  }, {
    names: ['rateestBps2'],
    arg: '--rateest-bps2'
  }, {
    names: ['rateestPps2'],
    arg: '--rateest-pps2'
  }, {
    names: ['realm'],
    arg: '--realm'
  }, {
    names: ['name'],
    arg: '--name'
  }, {
    names: ['set'],
    arg: '--set'
  }, {
    names: ['rsource'],
    arg: '--rsource'
  }, {
    names: ['rdest'],
    arg: '--rdest'
  }, {
    names: ['rcheck'],
    arg: '--rcheck'
  }, {
    names: ['update'],
    arg: '--update'
  }, {
    names: ['remove'],
    arg: '--remove'
  }, {
    names: ['seconds'],
    arg: '--seconds'
  }, {
    names: ['reap'],
    arg: '--reap'
  }, {
    names: ['hitcount'],
    arg: '--hitcount'
  }, {
    names: ['rttl'],
    arg: '--rttl'
  }, {
    names: ['chunkTypes'],
    arg: '--chunk-types'
  }, {
    names: ['matchSet'],
    arg: '--match-set'
  }, {
    names: ['transparent'],
    arg: '--transparent'
  }, {
    names: ['state'],
    arg: '--state'
  }, {
    names: ['probability'],
    arg: '--probability'
  }, {
    names: ['every'],
    arg: '--every'
  }, {
    names: ['packet'],
    arg: '--packet'
  }, {
    names: ['algo'],
    arg: '--algo'
  }, {
    names: ['from'],
    arg: '--from'
  }, {
    names: ['to'],
    arg: '--to'
  }, {
    names: ['tcpFlags'],
    arg: '--tcp-flags'
  }, {
    names: ['syn'],
    arg: '--syn'
  }, {
    names: ['tcpOption'],
    arg: '--tcp-option'
  }, {
    names: ['mss'],
    arg: '--mss'
  }, {
    names: ['datestart'],
    arg: '--datestart'
  }, {
    names: ['datestop'],
    arg: '--datestop'
  }, {
    names: ['timestart'],
    arg: '--timestart'
  }, {
    names: ['timestop'],
    arg: '--timestop'
  }, {
    names: ['monthdays'],
    arg: '--monthdays'
  }, {
    names: ['weekdays'],
    arg: '--weekdays'
  }, {
    names: ['kerneltz'],
    arg: '--kerneltz'
  }, {
    names: ['tos'],
    arg: '--tos'
  }, {
    names: ['ttlEq'],
    arg: '--ttl-eq'
  }, {
    names: ['ttlGt'],
    arg: '--ttl-gt'
  }, {
    names: ['ttlLt'],
    arg: '--ttl-lt'
  }, {
    names: ['u32'],
    arg: '--u32'
  }, {
    names: ['type'],
    arg: '--type'
  }, {
    names: ['checksumFill'],
    arg: '--checksum-fill'
  }, {
    names: ['setClass'],
    arg: '--set-class'
  }, {
    names: ['new'],
    arg: '--new'
  }, {
    names: ['hashmode'],
    arg: '--hashmode'
  }, {
    names: ['clustermac'],
    arg: '--clustermac'
  }, {
    names: ['totalNodes'],
    arg: '--total-nodes'
  }, {
    names: ['localNode'],
    arg: '--local-node'
  }, {
    names: ['hashInit'],
    arg: '--hash-init'
  }, {
    names: ['setXmark'],
    arg: '--set-xmark'
  }, {
    names: ['saveMark'],
    arg: '--save-mark'
  }, {
    names: ['restoreMark'],
    arg: '--restore-mark'
  }, {
    names: ['andMark'],
    arg: '--and-mark'
  }, {
    names: ['orMark'],
    arg: '--or-mark'
  }, {
    names: ['xorMark'],
    arg: '--xor-mark'
  }, {
    names: ['setMark'],
    arg: '--set-mark'
  }, {
    names: ['save'],
    arg: '--save'
  }, {
    names: ['restore'],
    arg: '--restore'
  }, {
    names: ['notrack'],
    arg: '--notrack'
  }, {
    names: ['helper'],
    arg: '--helper'
  }, {
    names: ['ctevents'],
    arg: '--ctevents'
  }, {
    names: ['expevents'],
    arg: '--expevents'
  }, {
    names: ['zone'],
    arg: '--zone'
  }, {
    names: ['toDestination', 'toDest', 'toDst'],
    arg: '--to-destination'
  }, {
    names: ['random', 'rand'],
    arg: '--random'
  }, {
    names: ['persistent', 'persist'],
    arg: '--persistent'
  }, {
    names: ['setDscp'],
    arg: '--set-dscp'
  }, {
    names: ['setDscpClass'],
    arg: '--set-dscp-class'
  }, {
    names: ['ecnTcpRemove'],
    arg: '--ecnTcpRemove'
  }, {
    names: ['timeout'],
    arg: '--timeout'
  }, {
    names: ['label'],
    arg: '--label'
  }, {
    names: ['logLevel'],
    arg: '--log-level'
  }, {
    names: ['logPrefix'],
    arg: '--log-prefix'
  }, {
    names: ['logTcpSequence', 'logTcpSeq'],
    arg: '--log-tcp-sequence'
  }, {
    names: ['logTcpOptions'],
    arg: '--log-tcp-options'
  }, {
    names: ['logIpOptions'],
    arg: '--log-ip-options'
  }, {
    names: ['logUid'],
    arg: '--log-uid'
  }, {
    names: ['toPorts'],
    arg: '--to-ports'
  }, {
    names: ['nflogGroup', 'nflogGrp'],
    arg: '--nflog-group'
  }, {
    names: ['nflogPrefix'],
    arg: '--nflog-prefix'
  }, {
    names: ['nflogRange'],
    arg: '--nflog-range'
  }, {
    names: ['nflogThreshold'],
    arg: '--nflog-threshold'
  }, {
    names: ['queueNum'],
    arg: '--queue-num'
  }, {
    names: ['queueBalance'],
    arg: '--queue-balance'
  }, {
    names: ['queueBypass'],
    arg: '--queue-bypass'
  }, {
    names: ['rateestName'],
    arg: '--rateset-name'
  }, {
    names: ['rateestInterval'],
    arg: '--rateest-interval'
  }, {
    names: ['rateestEwmalog'],
    arg: '--rateest-ewmalog'
  }, {
    names: ['rejectWith'],
    arg: '--reject-with'
  }, {
    names: ['nodst'],
    arg: '--nodst'
  }, {
    names: ['addSet'],
    arg: '--add-set'
  }, {
    names: ['delSet'],
    arg: '--del-set'
  }, {
    names: ['exist'],
    arg: '--exist'
  }, {
    names: ['toSource', 'toSrc'],
    arg: '--to-source'
  }, {
    names: ['setMss'],
    arg: '--set-mss'
  }, {
    names: ['clampMssToPmtu'],
    arg: '--clamp-mss-to-pmtu'
  }, {
    names: ['stripOptions'],
    arg: '--stripOptions'
  }, {
    names: ['gateway'],
    arg: '--gateway'
  }, {
    names: ['setTos'],
    arg: '--set-tos'
  }, {
    names: ['andTos'],
    arg: '--and-tos'
  }, {
    names: ['orTos'],
    arg: '--or-tos'
  }, {
    names: ['xorTos'],
    arg: '--xor-tos'
  }, {
    names: ['onPort'],
    arg: '--on-port'
  }, {
    names: ['onIp'],
    arg: '--on-ip'
  }, {
    names: ['tproxyMark'],
    arg: '--tproxy-mark'
  }, {
    names: ['ttlSet'],
    arg: '--ttl-set'
  }, {
    names: ['ttlDec'],
    arg: '--ttl-dec'
  }, {
    names: ['ttlInc'],
    arg: '--ttl-inc'
  }, {
    names: ['ulogNlgroup'],
    arg: '--ulog-nlgroup'
  }, {
    names: ['ulogPrefix'],
    arg: '--ulog-prefix'
  }, {
    names: ['ulogCprange'],
    arg: '--ulog-cprange'
  }, {
    names: ['ulogQthreshold'],
    arg: '--ulog-qthreshold'
  }
];

module.exports = args;
