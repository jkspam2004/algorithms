function insertionSortL(list) {
  if (!list || !list.next) { return list; }
  var parent = node("parent");

  while (list) {
	var firstNode = list;
	list = list.next;
	sortedInsert(parent, firstNode);
  }
  return parent.next;
}
function sortedInsert(list, node) {
  while (list.next && list.next.val<=node.val)
  { list = list.next; }
  node.next = list.next;
  list.next = node;
} 